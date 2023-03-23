package com.qa.banking.exceptions;

public class LockedAccountException extends Exception{

    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public LockedAccountException(String errorMessage){
        super(errorMessage);
    }
}
