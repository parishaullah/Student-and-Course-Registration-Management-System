import { courseUrl } from "../src/services/courseRegisterService"


describe ('courseUrl',() =>{
    it('should return the Course URL messege',() => {
        const result =courseRegistrationService.courseUrl(1);
        expect(result).toBe('http://localhost:3000/courseregistrations/1');
    });

});