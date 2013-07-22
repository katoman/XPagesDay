function getDocID(strSubject){
	var db = database;
	var view = db.getView("dx");
	var doc = view.getDocumentByKey(strSubject,true);
	return doc.getUniversalID();
	
}

function getDocID2(strSubject){
	var db = database;
	var view = db.getView("dx2");
	var doc = view.getDocumentByKey(strSubject,true);
	return doc.getUniversalID();
}

function getSessionID(strSubject){
	var db = database;
	var view = db.getView("dxsession");
	var doc = view.getDocumentByKey(strSubject,true);
	return doc.getUniversalID();
}