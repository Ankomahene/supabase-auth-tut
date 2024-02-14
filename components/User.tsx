export default async function User() {
  return (
    <div className="flex items-center gap-4">
      Hey, user email
      <form>
        <button className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover">
          Logout
        </button>
      </form>
    </div>
  );
}
