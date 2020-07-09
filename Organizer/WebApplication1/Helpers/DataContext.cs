using Microsoft.EntityFrameworkCore;
using WebApplication1.Entities;

namespace WebApplication1.Helpers
{
  public class DataContext : DbContext
  {
    public DataContext(DbContextOptions<DataContext> options)
      : base(options)
    {
      Database.EnsureCreated();
    }

    public DbSet<SheduleTask> Tasks { get; set; }
  }
}
