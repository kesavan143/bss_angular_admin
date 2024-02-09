import { Injectable } from '@angular/core';


export class Constant {
    public Server = 'https://sjrb3ed89j.execute-api.ap-south-1.amazonaws.com/Prod/';
    public ApiUrl = 'api/';
    public ServerWithApiUrl = this.Server + this.ApiUrl;
}