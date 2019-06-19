<?php
    if (!function_exists('getallheaders')) {
        function getallheaders() {
            $headers = array();
        foreach ($_SERVER as $name => $value) {
            if (substr($name, 0, 5) == 'HTTP_') {
                $headers[str_replace(' ', '-', ucwords(strtolower(str_replace('_', ' ', substr($name, 5)))))] = $value;
            }
        }
            return $headers;
        }
    }
        
    $headers = getallheaders();  
   
    //echo $headers["Token"];
    
    if(@$headers["Token"]!=="ddddddd"){
        exit('101');  // 拒绝访问
    }

    echo '{
        "getNetworkList": [
          {
            "id": 1,
            "title": "百度",
            "url": "http://baidu.com"
          },
          {
            "id": 2,
            "title": "腾讯",
            "url": "http://qq.com"
          },
          {
            "id": 3,
            "title": "网易",
            "url": "https://www.163.com/"
          },
          {
            "id": 4,
            "title": "淘宝",
            "url": "http://taobao.com"
          }
        ]
    
      }';
   

  

?>