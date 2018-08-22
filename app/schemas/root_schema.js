const schema = {
  "layouts": {
    "layout1": {
      "component": "FormComponentContainer",
      "id": "comp1",
      "title": "Login",
      "styleClass":{
         "container":"mainScreenContainer"
      },
      "formValidationSuccessMessage": "@string/login_success",
      "meta": {
        "onFormSubmit": {
          "moduleName": "checkLogin",
          "args": ["212"]
        }
      },
      "children":[
        {
          "id": "loginContainer",
          "component": "GenericComponent",
          "styleClass": {
            "container": ["flex0", "marginHorizontalMedium"]
          },
          "children": [
            {
              "id": "t1",
              "component": "TextView",
              "template": "@string/ASTERISK",
              "binding": "@string/Email_input",
              "styleClass": {
                "text": "tinyTextStyle"
              }
            },
            {
              "id": "l1",
              "component": "TextInputView",
              "placeholder": "@string/Email_input",
              "name": "Email",
              "styleClass": {
                "textInput": "NameInputStyle"
              },
              "formProps": {
                "validators": [{
                  "moduleName": "validateEmail",
                  "args": ["text"],
                  "errorMessage": "@string/valid_email"
                }]
              }
            },
            {
              "id": "t2",
              "component": "TextView",
              "template": "@string/ASTERISK",
              "binding": "@string/Password_input",
              "styleClass": {
                "text": "tinyTextStyle"
              }
            },
            {
              "id": "l2",
              "component": "TextInputView",
              "placeholder": "@string/Password_input",
              "name": "Password",
              "styleClass": {
                "textInput": "NameInputStyle"
              },
              "formProps": {
                "validators": [{
                  "moduleName": "validateMinMaxCharacters",
                  "args": [4, 25],
                  "errorMessage": "@string/minimum_character_allowed"
                  }]
              }
            },
            {
              "id": "b1",
              "component": "Button",
              "signal": "FormSubmit",
              "styleClass": {
                "outerContainer": ["btn", "btnPrimary", "alignSelfCenter"]
              },
              "children": [
                {
                  "id": "tb1",
                  "component": "TextView",
                  "binding": "@string/Btn_Login",
                  "styleClass": {
                    "text": ["btnText", "btnTextWhite"]
                  }
                }
              ]
            }
          ]      
        }
      ]
    }
  },
  "stylesheet":{
    "backgroundColorRed":{
      "backgroundColor":"red"
    },
    "mainScreenContainer": {
      "backgroundColor": "@color/bg_main",
      "flex": 1,
      "flexDirection": "column"
    },
    "tinyTextStyle": {
      "fontSize": "@dimen/tiny_text",
      "color": "@color/color_black",
      "marginHorizontal": "@dimen/dimen_m"
    },
    "emailFieldStyle": {
      "flex": 2,
      "alignItems": "stretch"
    },
    "NameInputStyle": {
      "fontSize": "@dimen/h3",
      "color": "@color/color_black",
      "paddingTop": "@dimen/dimen_m",
      "borderBottomColor": "@color/color_mid_grey",
      "borderBottomWidth": 1,
      "height": 40,
      "paddingBottom": 0
    },
    "headerContainerStyle": {
      "backgroundColor": "@color/bg_brand1"
    },
    "h2TextStyleBlack": {
      "fontSize": "@dimen/h2",
      "color": "@color/color_black"
    },
    "spaceTextMarginStyle": {
      "flex": 1,
      "justifyContent": "center",
      "justifyContent": "center",
      "paddingTop": "@dimen/dimen_s"
    },
    "justifyContent": {
      "justifyContent": "center"
    },
    "flexJustifyContent": {
        "justifyContent": "center",
        "flex": 1
    },
    "flexCenteredAlignedContent": {
        "justifyContent": "center",
        "alignItems": "center",
        "flex": 1
    },
    "flexCenteredAlignedPadContent": {
        "justifyContent": "center",
        "alignItems": "center",
        "flex": 1,
        "paddingHorizontal": "@dimen/dimen_s"
    },
    "flex2JustifyContent": {
        "justifyContent": "center",
        "flex": 2
    },
    "flex0": {
        "flex": 0
    },
    "flex1": {
        "flex": 1
    },
    "btn": {
      "justifyContent": "center",
      "marginVertical": "@dimen/dimen_s",
      "paddingVertical": "@dimen/dimen_s",
      "width": "@dimen/button_width",
      "borderWidth": "@dimen/dimen_xxs",
      "borderRadius": "@dimen/button_border_radius",
      "elevation": "@dimen/button_elevation"
    },
    "btnAlert":{
      "justifyContent": "center",
      "marginVertical": "@dimen/dimen_s",
      "paddingVertical": "@dimen/dimen_s",
      "width": "@dimen/alert_button_width",
      "borderWidth": "@dimen/dimen_xxs",
      "borderRadius": "@dimen/button_border_radius",
      "elevation": "@dimen/button_elevation"
    },
    "btnPrimary": {
      "backgroundColor": "@color/bg_brand1",
      "borderColor": "@color/bg_brand1"
    },
    "btnSecondary": {
      "backgroundColor": "@color/color_white",
      "borderColor": "@color/bg_brand1"
    },
    "alignSelfCenter": {
      "alignSelf": "center"
    },
    "alignSelfEnd": {
      "alignSelf": "flex-end"
    },
    "alignSelfStart": {
      "alignSelf": "flex-start"
    },
    "justifyCenter": {
      "justifyContent": "center"
    },
    "justifyFlexEnd": {
      "justifyContent": "flex-end"
    },
    "justifyFlexStart": {
      "justifyContent": "flex-start"
    },
    "alignJustifyCenter": {
      "alignItems": "center",
      "justifyContent": "center"
    },
    "btnText": {
      "fontSize": "@dimen/tiny_text",
      "fontWeight": "bold",
      "textAlign": "center"
    },
    "btnTextWhite": {
      "color": "@color/color_white"
    },
    "marginHorizontalLarge": {
      "marginHorizontal": "@dimen/dimen_l"
    },
    "marginHorizontalMedium": {
      "marginHorizontal": "@dimen/dimen_m"
    },
    "marginHorizontalSmall": {
      "marginHorizontal": "@dimen/dimen_s"
    }
  },
  "schemaConfig": {
     "prefix": "root"
   },
  "appConfig": {
     "rootLayout":"root@layout1",
     "styleClass":{
     },
     "shouldUseSplash":false,
     "onAppLoad":{
       "moduleName":"setRootLayout",
       "args":["root@layout1"]
     }
  }
 }
 export default schema;
 