define({ "api": [
  {
    "type": "post",
    "url": "/api/post",
    "title": "新建文章",
    "description": "<p>新建文章</p>",
    "name": "新建文章",
    "group": "文章",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/post"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>文章标题</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>文章内容</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "tags",
            "description": "<p>标签</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "is_private",
            "description": "<p>是否仅自己可见</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求示例",
          "content": "{\n  \"title\": \"文章标题\",\n  \"content\": \"文章内容\",\n  \"tags\": [],\n  \"is_private\": false,\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "响应示例",
          "content": "{\n  \"code\": 0,\n  \"data\": {},\n  \"msg\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "routes/post.js",
    "groupTitle": "文章"
  }
] });
