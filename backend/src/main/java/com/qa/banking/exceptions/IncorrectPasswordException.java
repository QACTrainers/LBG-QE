package com.qa.banking.exceptions;

public class IncorrectPasswordException extends Exception{

    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public IncorrectPasswordException(String errorMessage){
        super(errorMessage);
    }
}
