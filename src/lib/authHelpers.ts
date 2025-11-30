/**
 * Authentication Helper Functions
 * 
 * Provides secure password hashing and validation utilities using bcrypt.
 * These functions should be used for all password-related operations.
 */

import bcrypt from 'bcryptjs';

// Number of salt rounds for bcrypt (higher = more secure but slower)
const SALT_ROUNDS = 10;

/**
 * Hash a plaintext password using bcrypt
 * @param password - The plaintext password to hash
 * @returns Promise<string> - The hashed password
 */
export async function hashPassword(password: string): Promise<string> {
    if (!password || password.length < 6) {
        throw new Error('Password must be at least 6 characters long');
    }

    const hash = await bcrypt.hash(password, SALT_ROUNDS);
    return hash;
}

/**
 * Verify a plaintext password against a bcrypt hash
 * @param password - The plaintext password to verify
 * @param hash - The bcrypt hash to compare against
 * @returns Promise<boolean> - True if password matches, false otherwise
 */
export async function verifyPassword(password: string, hash: string): Promise<boolean> {
    if (!password || !hash) {
        return false;
    }

    try {
        const isValid = await bcrypt.compare(password, hash);
        return isValid;
    } catch (error) {
        console.error('Error verifying password:', error);
        return false;
    }
}

/**
 * Validate email format
 * @param email - Email address to validate
 * @returns boolean - True if valid email format
 */
export function validateEmail(email: string): boolean {
    if (!email) return false;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Validate password strength
 * @param password - Password to validate
 * @returns {isValid: boolean, errors: string[]} - Validation result
 */
export function validatePassword(password: string): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (!password) {
        errors.push('Password is required');
        return { isValid: false, errors };
    }

    if (password.length < 8) {
        errors.push('Password must be at least 8 characters long');
    }

    if (!/[a-z]/.test(password)) {
        errors.push('Password must contain at least one lowercase letter');
    }

    if (!/[A-Z]/.test(password)) {
        errors.push('Password must contain at least one uppercase letter');
    }

    if (!/[0-9]/.test(password)) {
        errors.push('Password must contain at least one number');
    }

    return {
        isValid: errors.length === 0,
        errors
    };
}

/**
 * Sanitize user input to prevent XSS
 * @param input - User input string to sanitize
 * @returns string - Sanitized string
 */
export function sanitizeInput(input: string): string {
    if (!input) return '';

    return input
        .trim()
        .replace(/[<>]/g, '') // Remove HTML brackets
        .substring(0, 500); // Limit length
}

/**
 * Validate phone number format (basic validation)
 * @param phone - Phone number to validate
 * @returns boolean - True if valid format
 */
export function validatePhone(phone: string): boolean {
    if (!phone) return true; // Phone is optional

    // Allow digits, spaces, dashes, parentheses, and + symbol
    const phoneRegex = /^[\d\s\-\(\)\+]+$/;
    return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 7;
}

/**
 * Validate age is within acceptable range
 * @param age - Age to validate
 * @returns boolean - True if valid age
 */
export function validateAge(age: number): boolean {
    return age >= 12 && age <= 20;
}
