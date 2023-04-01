package com.qa.banking.exceptions;

public class IncorrectPasswordException extends Exception{

    public IncorrectPasswordException(String errorMessage){
        super(errorMessage);
    }
}
