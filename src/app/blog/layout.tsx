export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h2>This is the blog Layout</h2>
      {children}
    </div>
  );
}
