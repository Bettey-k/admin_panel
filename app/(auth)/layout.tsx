import ThemeToggler from "@/components/ThemeToggler";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="absolute bottom-5 right-0 text-white">
        <ThemeToggler />
      </div>
      {children}
    </div>
  );
};
export default AuthLayout;
