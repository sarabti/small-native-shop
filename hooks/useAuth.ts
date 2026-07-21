import { useCallback, useState } from "react";
import { Alert } from "react-native";

interface UseAuthReturn {
  isSignedIn: boolean;
  isLoading: boolean;
  error: string | null;
  signIn: (username: string, password: string) => Promise<boolean>;
  signOut: () => void;
}

export default function useAuth(): UseAuthReturn {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const signIn = useCallback(async (username: string, password: string) => {
    setIsLoading(true);
    setError(null);

    // simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    if (username === "admin" && password === "admin123") {
      setIsSignedIn(true);
      setIsLoading(false);
      Alert.alert("signed In!");
      return true;
    } else {
      setError("Invalid username or password");
      setIsLoading(false);
      Alert.alert("some problems while signing in...");
      return false;
    }
  }, []);

  const signOut = useCallback(() => {
    setIsSignedIn(false);
    setError(null);
  }, []);

  return { isSignedIn, isLoading, error, signIn, signOut };
}
