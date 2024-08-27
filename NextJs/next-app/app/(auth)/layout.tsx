export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className=" text-center text-blue-600">Login now to get 20% off</div>
      {children}
    </div>
  );
}
