var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
    function init() {
        canvas = document.getElementById("canvas");
        anim_container = document.getElementById("animation_container");
        dom_overlay_container = document.getElementById("dom_overlay_container");
        images = images||{};
        ss = ss||{};
        var loader = new createjs.LoadQueue(false);
        loader.addEventListener("fileload", handleFileLoad);
        loader.addEventListener("complete", handleComplete);
        loader.loadManifest(lib.properties.manifest);
    }
    function handleFileLoad(evt) {	
        if (evt.item.type == "image") { images[evt.item.id] = evt.result; }	
    }
    function handleComplete(evt) {
        //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
        var queue = evt.target;
        var ssMetadata = lib.ssMetadata;
        for(i=0; i<ssMetadata.length; i++) {
            ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
        }
        exportRoot = new lib.Mario();
        stage = new createjs.Stage(canvas);
        stage.addChild(exportRoot);	
    
        const SPEED = 10;		//速度
        const ATTACK = 10;		//沒吃到金幣扣的血
        let isStart = false;	//是否點擊開始遊戲
        let Hp = 100;			//總血量
        let winNum = 0; 		//吃到的金幣數
        let lightboxwinNum = 0; 		//吃到的
        let Positions = 1;		//方向判斷
        let isKeydown = false;	//是否按下鍵盤
    
        //創造小烏龜
        var Mario = new lib.MarioUser();
        Mario.x = 356;
        Mario.y = 353;
        exportRoot.addChild(Mario);
    
        
        let loadint = 0;	//目前載入進度
        const sounds = [
            {src:"./image/game/play.mp3", id:"play"},
            {src:"./image/game/coin.mp3", id:"coin"},
            {src:"./image/game/boom.mp3", id:"boom"},
            // {src:"./image/game/bg.mp3", id:"bg"},
        ];
        createjs.Sound.alternateExtensions = ["mp3"];
        createjs.Sound.addEventListener("fileload", (e)=>{
            loadint++
            if(loadint === sounds.length){
                document.querySelector(".loading").style.display = 'none';
                bgAudio = createjs.Sound.play("bg", {loop:-1});
                bgAudio.volume = 0.2;
            }
        });
        createjs.Sound.registerSounds(sounds, "./");
    
    
        //每秒產生金幣
        let timeCoin = setInterval(()=>{
            if(!isStart) return; 
            let Coin = new lib.Coin();
            Coin.x = Math.floor(Math.random() * (670 - 30 + 1) + 30); //亂數 * (最大值 - 最小值 + 1) + 最小值
            Coin.y = -50;
            exportRoot.addChildAt(Coin, 1);
            
            createjs.Tween.get(Coin)
            .to({y: 400}, 2500)
            .call(()=>{
                console.log("金幣沒吃到");
                exportRoot.removeChild(Coin);
                Hp -= ATTACK;
                document.querySelector(".hp").style.width = `${Hp}%`;
            })
            .addEventListener("change", ()=>{
                let hit = ndgmr.checkRectCollision(Coin, Mario); //金幣跟小烏龜碰撞
                if(hit){
                    createjs.Sound.play("coin")
                    createjs.Tween.removeTweens(Coin); //移除金幣動畫
                    exportRoot.removeChild(Coin); //移除金幣元件
                    // winNum ++;
                    winNum = winNum + 10;
                    //新點數=獲得的點數+資料庫的目前點數
                    lightboxwinNum = winNum + parseInt(document.querySelector("#point").innerText);
                    //玩遊戲獲得的點數印出來
                    document.querySelector(".winNum").innerHTML = winNum;
                    //新點數印出來
                    document.querySelector(".lightboxwinNum").innerHTML = lightboxwinNum;
                }
            })
        }, 1000)
    
        //遊戲開始按鈕
        document.querySelector(".gamePlayBtn").addEventListener("click", ()=>{
            createjs.Sound.play("play")
            isStart = true;
            document.querySelector(".gamePlayBtn").style.display = "none";
            window.addEventListener("keydown", keydownMoveFn);
            window.addEventListener("keyup", keyupMoveFn);
        })
    
        //遊戲重新開始
        document.querySelector(".resetPlay").addEventListener("click",()=>{
            window.location.reload();
        })
    
        function keydownMoveFn(e){
            if(isKeydown) return;
            if(e.keyCode===37 || e.keyCode===39){
                isKeydown = true;
                Positions = e.keyCode === 39 ? 1 : -1;
                Mario.gotoAndPlay("run");
            }
        }
    
        function keyupMoveFn(e){
            isKeydown = false;
            Mario.gotoAndPlay("stop");
        }
    
    
        createjs.Ticker.addEventListener("tick", tickFn)
        function tickFn(){
            if(Hp <= 0){
                clearInterval(timeCoin);
                createjs.Sound.play("boom")
                Mario.gotoAndPlay("del");
                document.querySelector(".over").style.display = "flex";
                window.removeEventListener("keydown", keydownMoveFn)
                window.removeEventListener("keyup", keyupMoveFn)
                createjs.Ticker.removeEventListener("tick", tickFn)
            }
            if(!isKeydown) return;
            Mario.x += SPEED * Positions;
            Mario.scaleX = Positions;
    
        }
    
    
        //Registers the "tick" event listener.
        fnStartAnimation = function() {
            createjs.Ticker.setFPS(lib.properties.fps);
            createjs.Ticker.addEventListener("tick", stage);
        }	    
        //Code to support hidpi screens and responsive scaling.
        function makeResponsive(isResp, respDim, isScale, scaleType) {		
            var lastW, lastH, lastS=1;		
            window.addEventListener('resize', resizeCanvas);		
            resizeCanvas();		
            function resizeCanvas() {			
                var w = lib.properties.width, h = lib.properties.height;			
                var iw = window.innerWidth, ih=window.innerHeight;			
                var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
                if(isResp) {                
                    if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
                        sRatio = lastS;                
                    }				
                    else if(!isScale) {					
                        if(iw<w || ih<h)						
                            sRatio = Math.min(xRatio, yRatio);				
                    }				
                    else if(scaleType==1) {					
                        sRatio = Math.min(xRatio, yRatio);				
                    }				
                    else if(scaleType==2) {					
                        sRatio = Math.max(xRatio, yRatio);				
                    }			
                }			
                canvas.width = w*pRatio*sRatio;			
                canvas.height = h*pRatio*sRatio;
                canvas.style.width = dom_overlay_container.style.width = anim_container.style.width =  w*sRatio+'px';				
                canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h*sRatio+'px';
                stage.scaleX = pRatio*sRatio;			
                stage.scaleY = pRatio*sRatio;			
                lastW = iw; lastH = ih; lastS = sRatio;		
            }
        }
        makeResponsive(false,'both',false,1);	
        fnStartAnimation();
    }