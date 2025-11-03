from fastapi import APIRouter, HTTPException

router=APIRouter()

contacts=[]



@router.post('/contactData')
def contactDataSave(contactData: dict):
    if contactData in contacts:
        raise HTTPException(
            status_code=400,  
            detail="Contact already exists"
        )
    contacts.append(contactData)
    print(contactData)
    return {'message': 'Contact Saved', 'contact': contactData}


    

