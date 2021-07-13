import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

  userProfileData(userProfile: any) {
    // console.log(userProfile);
  }
  userProfileError(profileError) {
    // console.log(profileError);
  }
  userProfileUpdate(profileUpdated) {
    // console.log(profileUpdated);
  }
  userProfileDataBase(profileDB) {
    // console.log(profileDB);
  }
  userProfileDataBaseUpdate(profileDBUpdated) {
    // console.log(profileDBUpdated);
  }
  userProfileDataBaseUpdateError(profileDBUpdatedError) {
    // console.log(profileDBUpdatedError);
  }
  userProfileDataBaseError(profileDBError) {
    // console.log(profileDBError);
  }
  userProfileUpdateError(prodileUpdatedError) {
    // console.log(prodileUpdatedError);
  } 
}
