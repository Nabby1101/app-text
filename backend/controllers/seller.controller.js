'use strict'
const seller = require('../models/seller.model');

exports.getIDBySearchText = async (searchText) => {
    let arr = [];
    try {
        arr = await seller.find({name: new RegExp(searchText, "i")},{name: 0});
    }
    catch (err) {
        res.status(500).json({ msg: err });
        return;
    }
    return arr.map(i => i.id);
}

exports.getAll = async (req, res) => {
    if(typeof req.params.page === 'undefined') {
        res.status(402).json({msg: 'Data invalid'});
        return;
    }
    let count = null;
    try { 
        count = await seller.count({});
    }
    catch(err) {
        console.log(err);
        res.status(500).json({msg: err});
        return;
    }
    let totalPage = parseInt(((count - 1) / 9) + 1);
    let { page } = req.params;
    if ((parseInt(page) < 1) || (parseInt(page) > totalPage)) {
        res.status(200).json({ data: [], msg: 'Invalid page', totalPage });
        return;
    }
    seller.find({})
    .skip(9 * (parseInt(page) - 1))
    .limit(9)
    .exec((err, docs) => {
        if(err) {
            console.log(err);
                res.status(500).json({ msg: err });
                return;
        }
        res.status(200).json({ data: docs, totalPage });
    })
}

exports.getNameByID = async(req, res) => {
    if(req.params.id === 'undefined') {
        res.status(422).json({ msg: 'Invalid data' });
        return;
    }
    let result
    try {
        result = await seller.findById(req.params.id);
    }
    catch(err) {
        console.log(err)
        res.status(500).json({msg: err})
        return;
    }
    if(result === null){
        res.status(404).json({msg: "not found"})
        return;
    }
    res.status(200).json({name: result.name})
}
exports.getSeller =  (req, res) => {
    seller.find({}, (err, docs) => {
        if(err) {
            console.log(err);
        }
        res.status(200).json({data: docs})
    })
}