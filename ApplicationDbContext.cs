
using Microsoft.EntityFrameworkCore;
using AdminDashboard3.Models;
using AdminDashboard3.Models.models;
using AdminDashboard3.Models;
using System.Collections.Generic;

namespace AdminDashboard3.NewFolder
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
        {
        }

        public DbSet<Vehicle> Vehicles { get; set; }
        public DbSet<Driver> Drivers { get; set; }
        public DbSet<Trip> Trips { get; set; }
    }
}

