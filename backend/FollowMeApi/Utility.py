class CustomResponse():

    StatusCode=0
    Message=""
    Result=object

    def __init__(self, StatusCode,Message,Result):
        self.StatusCode = StatusCode
        self.Message=Message
        self.Result=Result

    def GetCustomReponse(self):
        return {"StatusCode":self.StatusCode,"Message":self.Message,"Result":self.Result}
