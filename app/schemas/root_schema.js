const schema = {
 "layouts": {
   "layout1": {
     "component": "GenericComponent",
     "id": "comp1",
     "title": "Home",
     "styleClass":{
        "container":"backgroundColorRed"
     },
     "children":[
      {
        "id":"text1",
        "component":"TextView",
        "binding":"This is a text"      
      }
     ]
   }
 },
 "stylesheet":{
    "backgroundColorRed":{
       "backgroundColor":"red"
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
