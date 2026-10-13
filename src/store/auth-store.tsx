import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type AppUser = {
  id: string;
  name: string;
  email: string;
  role: "admin" | "manager" | "stylist";
};

type AuthContextValue = {
  user: AppUser | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const DEMO_USER: AppUser = {
  id: "user_101",
  name: "Alicia Johnson",
  email: "demo@fashiontrack.io",
  role: "admin",
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AppUser | null>(null);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      login: (email, password) => {
        if (!email || !password) {
          return;
        }

        setUser({
          ...DEMO_USER,
          email,
          name: "Retail Team User",
        });
      },
      logout: () => setUser(null),
    }),
    [user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
}
