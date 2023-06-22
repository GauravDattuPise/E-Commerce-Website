import bcrypt from "bcrypt"

// HASHING PASSWORD USING bcrypt

export const hashingPassword = async (password) => {
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        return hashedPassword
    } catch (error) {
        console.log("error is ", error);
    }
}

// MATCHING PASSWORD & HASHED PASSWORD

export const comparingPassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
}