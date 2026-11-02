// Akkuea Contracts: Atomic Initialization Guard (Issue #1302)
pub struct ContractAdminGuard {
    pub is_initialized: bool,
    pub admin_id: u64,
}

impl ContractAdminGuard {
    pub fn initialize(&mut self, deployer_id: u64) -> Result<(), &'static str> {
        if self.is_initialized {
            return Err("Contract has already been initialized");
        }
        self.is_initialized = true;
        self.admin_id = deployer_id;
        Ok(())
    }
}
