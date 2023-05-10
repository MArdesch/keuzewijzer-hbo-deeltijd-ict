﻿using Microsoft.EntityFrameworkCore;
using keuzewijzer_hbo_deeltijd_ict_API.Models;

namespace keuzewijzer_hbo_deeltijd_ict_API.Dal
{
    public class KeuzewijzerContext : DbContext
    {
        public KeuzewijzerContext(DbContextOptions<KeuzewijzerContext> options) : base(options)
        {
        }

        public DbSet<User> Users { get; set; }

        public DbSet<StudyRoute> StudyRoutes { get; set; }

        public DbSet<StudyRouteItem> StudyRouteItems { get; set; }

        public DbSet<Module> Modules { get; set; }

        public DbSet<Cohort> Cohorts { get; set; }

    }
}
