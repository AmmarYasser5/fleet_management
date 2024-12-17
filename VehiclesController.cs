using AdminDashboard3.Models;
using AdminDashboard3.NewFolder;
using AdminDashboard3.Models;
using Microsoft.AspNetCore.Mvc;

namespace AdminDashboard3.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class VehiclesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public VehiclesController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(_context.Vehicles.ToList());
        }

        [HttpPost]
        public IActionResult AddVehicle([FromBody] Vehicle vehicle)
        {
            _context.Vehicles.Add(vehicle);
            _context.SaveChanges();
            return Ok(vehicle);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateVehicle(int id, [FromBody] Vehicle vehicle)
        {
            var existingVehicle = _context.Vehicles.Find(id);
            if (existingVehicle == null) return NotFound();

            existingVehicle.LicensePlate = vehicle.LicensePlate;
            existingVehicle.Make = vehicle.Make;
            existingVehicle.Model = vehicle.Model;
            existingVehicle.Year = vehicle.Year;
            existingVehicle.IsActive = vehicle.IsActive;

            _context.SaveChanges();
            return Ok(existingVehicle);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteVehicle(int id)
        {
            var vehicle = _context.Vehicles.Find(id);
            if (vehicle == null) return NotFound();

            _context.Vehicles.Remove(vehicle);
            _context.SaveChanges();
            return Ok();
        }
    }
}
