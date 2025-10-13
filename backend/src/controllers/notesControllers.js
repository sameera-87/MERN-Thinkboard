
export function getALLNotes(req, res){
    res.status(200).send("You just fetched the notes");
}

export function createNote(req,res){
    res.status(201).json({message:"Note created succefully!"});
}

export function updateNote(req, res){
    res.status(200).json({message:"Note updated succesfully!"});
}

export function deleteNote(req,res){
    res.status(200).json({message: "Note deleted successfully!"})
}