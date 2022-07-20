# from crypt import methods
from flask import Flask,jsonify,request
import sys,os
sys.path.insert(0,os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from Colors.orm import COLOR, session
from Colors.map import color_mapping
from Colors.service import get_colors

app = Flask(__name__)
app.config["SQLALCHEMY_ECHO"] = True


@app.route('/color-details' , methods = ['GET','POST'] )
def get_all_details():
    if request.method == 'GET':
        details = get_colors()
        results = [{
            "color_name": detail.color_name,
            "color_category":detail.color_category
        } for detail in details]

        return{"details":results}

    elif request.method=='POST':
        data = request.get_json()
        try:
            results = color_mapping(data)
            return {"ok" : True,"message": "Details added "}
        except Exception as ex:
            return{"ok": False,"message":f"Something went wrong {ex}"}  


# def format_event(event):
#     return{
#         "color_name":event.color_name,
#         "color_category":event.color_category
#     }




# @app.route('/event',methods = ['POST']) 
# def create_event():
#     color_name = request.json['color_name']
#     color_category = request.json['color_category']
#     event = COLOR(color_name,color_category)
#     session.add(event)
#     session.commit()
#     return format_event(event)

@app.route('/color', methods = ['PUT' , 'DELETE'])
def color():
    if request.method == 'PUT':
        updatecolor=session.query(COLOR).filter_by(id=4).one()
        updatecolor.color_name = 'Blue'
        session.add(updatecolor)
        session.commit()
        return("The data is updated successfully")

    elif request.method == 'DELETE':
        color_to_delete = session.query(COLOR).filter_by(id=4).one()
        session.delete(color_to_delete)
        session.commit()
        
        # try:
        #     return{"ok":False,"message":"completed"}
        # except Exception as ex:
        #     return{"ok": False,"message":f"Something went wrong {ex}"}    






# @app.route('/delete',method = ['DELETE'])
# def delete_color():
#     if request.method == 'DELETE':
#         color_to_delete = session.query(COLOR).filter_by(id=2).one()
#         session.delete(color_to_delete)
#         session.commit()

#     try:
        
#         return{"ok" : True,"message": "Deleted"}


#     except Exception as ex: 
        
#         return{"ok": False,"message":f"Something went wrong {ex}"}  

        



if __name__  =="__main__":
    app.run(host = 'localhost', port = 5643, debug=True)              
