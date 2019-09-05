import UserModel from '../models/User';

class UserController {
    
    index (req, res) {
        UserModel.find().then((err, users) => {
            if (err) {
                res.send(err);
            }
            res.json(users);
        })
    }

    create (req, res) {
        const data = req.body;
        const user = new UserModel({
            title: data.title,
            text: data.text
        });
        
        user.save().then(() => {
            res.send({status: "ok"})
        });
    }

    read (req, res) {
        UserModel.findOne({ _id: req.params.id }).then(user => {
            if (!user) {
                res.send({error: 'not found'});
            } else {
                res.json(user);
            }
        });
    }

    update (req, res) {
        UserModel.findByIdAndUpdate(req.params.id, {$set: req.body}, (err) => {
            if (err) {
                res.send({status: err});
            }
            res.json({status: "updated"});
        });
    }

    delete (req, res) {
        UserModel.remove({
            _id: req.params.id
        }).then((err, user) => {
            if (user) {
                res.send({status: "deleted"});
            } else {
                res.json({status: err});
            }
        })
    }


}

export default UserController;