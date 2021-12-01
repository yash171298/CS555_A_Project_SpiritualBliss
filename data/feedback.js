const mongoCollections = require('../config/mongoCollections');

const mongocall = require("mongodb");
const feedbacks = mongoCollections.feedback;

module.exports={
async create(feedback_title, email_id, first_name, last_name, feedback_summary )
  {
    // const movies = mongoCollections.movies;

    // const dogCollection = await dogs();
    const feedbackCollection = await feedbacks();

     if (!feedback_title) throw 'You must provide a title for the movie';
     if (!feedback_summary) throw 'You must provide genre for the movie';
     if ( feedback_summary == ' ') throw 'Feedback_Summary is not a string';
     if (typeof feedback_title != 'string') throw 'No inputs provided or the title is not a string';
     if (feedback_title == ' ') throw 'No inputs provided or the title is not a string';
     if(typeof summary != 'string') throw 'No inputs provided or the runtime is not a string';
     function ValidateEmail(mail) {
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
            return (true)
        }
        return (false)
    }
    if(!ValidateEmail(email_id)) throw "Provided email address is incorrect";
    if (!first_name) throw 'Not a proper input or not a string';
    if (!last_name) throw 'Not a proper input or not a string';
    if(typeof first_name != "string") throw " Provided input is not a string";
    if(typeof last_name != "string") throw " Provided input is not a string";
     
    let newfeedback = {
        feedback_title: feedback_title,
        summary: summary,
        email_id:email_id,
        first_name:first_name,
        last_name:last_name
        };


        const insertInfo = await feedbackCollection.insertOne(newfeedback);
        if (insertInfo.insertedCount === 0) throw 'Could not add feedback';
    
        const newId = insertInfo.insertedId;
    
        const feedback = await this.get(newId.toString());
        return feedback;
    },
    async get(id) {
        if (!id) throw "You must provide an id to search for";
        if (typeof id != 'string') throw 'Id is not a String.';
        
        const feedbackCollection = await feedbacks();
        const result = await feedbackCollection.findOne({ _id: mongocall.ObjectID(id) }); 
        if (result === null) throw `No books with that id : ${id}`;
        result._id = result._id.toString();
    
        return result;
    },
    getAllbooks: async () => {
      const feedbackCollection = await feedbacks();
      const feedbackList = await feedbackCollection.find({},{ projection: { _id: 1, title: 1 }}).toArray();
      return feedbackList;
    }
}