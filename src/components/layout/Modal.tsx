export const ModalLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="absolute top-0 inset-0 bg-black/95 z-50">
      <div className="flex justify-center items-center h-screen">
        {children}
      </div>
    </div>
  );
};
