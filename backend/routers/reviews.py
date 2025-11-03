from fastapi import APIRouter, HTTPException

router=APIRouter()


reviewsData=[{
      'id': 1,
      'rating': 5,
      'text': "IF YOU ARE LOOKING FOR A CAR IN MARITIMES, I WOULD SAY SAHIL IS THE MAN WHO CAN ASSIST YOU IN GETTING THE BEST DEALS ON USED CARS. HONEST AND TRUSTWORTHY. ALL THE BEST😇",
      'author': "SK Sohal (Verified Facebook Review)",
    },
    {
      'id': 2,
      'rating': 5,
      'text': "Best deals on reliable cars, i would highly recommend Sahil to everyone for best service. Transparent and Trustworthy. ✅✅",
      'author': "Rahul Patial (Verified Facebook Review)",
    },
    {
      'id': 3,
      'rating': 5,
      'text': "Best car dealership, best car salesman in town.Informative, detailed and transparent.ALL THE BEST.",
      'author': "Anmol Parmar (Verified Facebook Review)",
    }]

@router.get('/reviewsData')
def getReviewData():
    return {'message':'Reviews Data','reviewsData':reviewsData}

