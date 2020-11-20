<?php
        ob_start();
        session_start();
        // $_SESSION["memId"]='Mark123';
        // $_SESSION["memNo"]='1';
        // ob_start();
        // session_start();
        if(isset($_SESSION["memId"])){
            $errMsg = "";
            try {
                require_once("./connectAqua.php");
                $pdo->beginTransaction();
                // 取得上傳檔案數量
                $fileCount = count($_FILES['upFile']['name']);
                echo "fileCount = ", $fileCount, "<br>";

                $sql = "INSERT INTO blog ( memNo, blogTitle, blogPic, blogContent1, blogPic1, blogContent2, blogPic2, blogTime, blogStatus,
                       blogMark, blogTags)
                values('{$_SESSION["memNo"]}', :blogTitle, '', :blogContent1, '', :blogContent2, '', now(), '0', '0', :blogTags)"; 
                $products = $pdo->prepare( $sql );
                $products -> bindValue(":blogTitle", $_POST["blogTitle"]);
                $products -> bindValue(":blogContent1", $_POST["blogContent1"]);
                $products -> bindValue(":blogContent2", $_POST["blogContent2"]);
                $products -> bindValue(":blogTags", $_POST["blogTags"]);
                $products -> execute();
                    //取得自動創號的key值
                $blogNo = $pdo->lastInsertId();

                foreach ($_FILES["upFile"]["error"] as $i => $errorCode) {
                //.......確定是否上傳成功
                    if( $_FILES["upFile"]["error"][$i] == UPLOAD_ERR_OK){
                        //先檢查images資料夾存不存在
                        if( file_exists("img") === false){
                            mkdir("img");
                        }
                        //將檔案copy到要放的路徑
                        $fileInfoArr = pathinfo($_FILES["upFile"]["name"][$i]);
                        // $fileName = "{$_FILES['upFile']['name'][$i]}";
                        
                        $from = $_FILES["upFile"]["tmp_name"][$i];
                        $fileLocation[$i] = $to = "img/blogPost/{$blogNo}_{$i}.{$fileInfoArr["extension"]}";
                        // $to = "img/blogPost/$fileName";
                            if( ($result = copy( $from, $to))===true){
                            //將檔案名稱寫回資料庫
                        }else{
                          echo "-----", $result, "<br>";
                            $pdo->rollBack();
                          // break;
                          exit("新增失敗, $from , to : $to");
                        }
                    }else{
                        echo "錯誤代碼 : {$_FILES["upFile"]["error"][$i]} <br>";
                        echo "新增失敗<br>";
                    }
                }//foreach

                $sql = "update blog set blogPic = :blogPic, blogPic1=:blogPic1, blogPic2=:blogPic2 where blogNo = $blogNo";
                // $fileInfoArr0 = pathinfo($_FILES["upFile"]["name"][0]);
                // $fileInfoArr1 = pathinfo($_FILES["upFile"]["name"][1]);
                // $fileInfoArr2 = pathinfo($_FILES["upFile"]["name"][2]);
                // $fileLocation0 = "img/blogPost/{$blogNo}_0.{$fileInfoArr0["extension"]}";
                // $fileLocation1 = "img/blogPost/{$blogNo}_1.{$fileInfoArr1["extension"]}";
                // $fileLocation2 = "img/blogPost/{$blogNo}_2.{$fileInfoArr2["extension"]}";
                $products = $pdo->prepare($sql);
                $products -> bindValue(":blogPic", $fileLocation[0]);
                $products -> bindValue(":blogPic1", $fileLocation[1]);
                $products -> bindValue(":blogPic2", $fileLocation[2]);
                $products -> execute();
                echo $fileLocation[0], "<br>";
                echo $fileLocation[1], "<br>";
                echo $fileLocation[2], "<br>";
                echo "新增成功~";
                // $pdo->commit();

                $sql = "update member set point = point + :point+500 where memNo = {$_SESSION["memNo"]}";

                $member = $pdo->prepare($sql);
                $member -> bindValue(":point", $_POST["point"]);
                $member -> execute();
                $pdo->commit();
                echo "commit success! <br>";
                header("Location:./blog1.php");
            } catch (PDOException $e) {
                // $pdo->rollBack();
                $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
                $errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";
            }
            echo $errMsg;
        }else{
            echo "您尚未登入，請登入後再發文";
        }
        ?>
