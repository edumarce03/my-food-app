import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { signInWithEmailAndPassword, signOut, AuthError } from "firebase/auth";
import { auth } from "../firebase/config";

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth debe usarse dentro de un AuthProvider");
  }

  const login = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      return { success: true };
    } catch (error) {
      const authError = error as AuthError;
      let errorMessage = "Error al iniciar sesión";

      if (authError.code === "auth/invalid-credential") {
        errorMessage = "Credenciales inválidas";
      } else if (authError.code === "auth/user-not-found") {
        errorMessage = "Usuario no encontrado";
      } else if (authError.code === "auth/wrong-password") {
        errorMessage = "Contraseña incorrecta";
      }

      return { success: false, error: errorMessage };
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      return { success: true };
    } catch {
      return {
        success: false,
        error: "Error al cerrar sesión",
      };
    }
  };

  return {
    ...context,
    login,
    logout,
  };
};
