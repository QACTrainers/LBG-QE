package com.qa.banking.exceptions;

public class LockedAccountException extends Exception{

    public LockedAccountException(String errorMessage){
        super(errorMessage);
    }
}
