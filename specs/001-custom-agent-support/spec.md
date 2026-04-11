# Feature Specification: Custom Agent Support for Speckit Commands

**Feature Branch**: `001-custom-agent-support`  
**Created**: 2026-04-11  
**Status**: Draft  
**Input**: User description: "Hello Claude can u add custom agent in all speckit command"

## User Scenarios & Testing

### User Story 1 - Define and Configure Custom Agents (Priority: P1)

As a portfolio developer using speckit, I want to define custom agents that extend the capabilities of speckit commands, so that I can automate recurring workflows specific to my project needs and integrate with domain-specific tools.

**Why this priority**: Custom agents enable developers to tailor speckit workflow to project-specific requirements, increasing productivity and enabling integration with existing development practices.

**Independent Test**: Developer can create a custom agent configuration in `.specify/` directory and verify that the agent is recognized and available when running any speckit command.

**Acceptance Scenarios**:

1. **Given** a developer creates a `.specify/agents/my-agent.md` file, **When** they run any speckit command, **Then** the custom agent is recognized and available for invocation
2. **Given** a custom agent is defined, **When** the developer runs `/speckit.specify`, **Then** the custom agent can be invoked or integrated into the workflow
3. **Given** multiple custom agents are defined, **When** a developer runs speckit commands, **Then** all available agents are listed and accessible across all commands

---

### User Story 2 - Execute Custom Agents in Specification Phase (Priority: P1)

As a developer, I want custom agents to run during the `/speckit.specify` command, so that I can validate specifications, extract metadata, or enrich feature definitions automatically.

**Why this priority**: Specification phase is the foundation for all downstream planning and implementation; custom agents here enable early validation and quality checks.

**Independent Test**: A custom agent defining specification validation rules executes during `/speckit.specify`, checks the generated spec against custom rules, and reports results.

**Acceptance Scenarios**:

1. **Given** a custom validation agent is registered, **When** `/speckit.specify` completes, **Then** the agent executes and validates the spec
2. **Given** the agent detects spec quality issues, **When** execution completes, **Then** warnings or recommendations are presented to the developer
3. **Given** critical issues are found, **When** the agent runs, **Then** development can be blocked or flagged for review

---

### User Story 3 - Execute Custom Agents in Planning Phase (Priority: P2)

As a technical lead, I want custom agents to run during `/speckit.plan`, so that I can inject architectural guidance, technology stack validation, or integration patterns tailored to our project standards.

**Why this priority**: Planning phase defines the technical approach; custom agents ensure alignment with team standards and architectural principles from the Sigfrid Portfolio Constitution.

**Independent Test**: A custom architecture validator agent runs during `/speckit.plan` and ensures proposed implementation aligns with MVVM/MVP patterns defined in project constitution.

**Acceptance Scenarios**:

1. **Given** an architecture validation agent is configured, **When** `/speckit.plan` executes, **Then** the plan is validated against architectural standards
2. **Given** the plan deviates from standards, **When** validation completes, **Then** recommendations are provided to align with project guidelines

---

### User Story 4 - Execute Custom Agents in Task Generation Phase (Priority: P2)

As an engineer, I want custom agents to run during `/speckit.tasks`, so that I can auto-generate task templates, add custom labels, or integrate with project management systems (Jira).

**Why this priority**: Task generation is where work is operationalized; custom agents enable structured task creation and integration with existing project management workflows.

**Independent Test**: A Jira integration agent runs during `/speckit.tasks`, automatically creates issues with custom fields, and links them to the feature.

**Acceptance Scenarios**:

1. **Given** a task templating agent is defined, **When** `/speckit.tasks` completes, **Then** tasks are enriched with custom fields/metadata
2. **Given** a PM integration agent is configured, **When** tasks are generated, **Then** they are automatically synced to external systems
3. **Given** tasks have custom labels from agent output, **When** the developer reviews them, **Then** organization is improved and integration is transparent

---

### User Story 5 - Execute Custom Agents in Implementation/Checkout Phase (Priority: P3)

As a developer, I want custom agents available during implementation (`/speckit.implement`), so that I can automate code generation hooks, linting, or deployment preparation.

**Why this priority**: Implementation phase is where code is written; custom agents here enable automation of cross-cutting concerns like code generation, quality checks, or deployment prep.

**Independent Test**: A code-quality agent runs before commits are finalized, checks for violations of portfolio constitution principles, and reports findings.

**Acceptance Scenarios**:

1. **Given** a code-quality agent is registered, **When** implementation phase completes, **Then** the agent runs quality checks
2. **Given** violations are found, **When** the agent reports, **Then** developer can remediate before continuing

---

### User Story 6 - Agent Discovery and Documentation (Priority: P2)

As a new developer joining the project, I want to discover what custom agents are available, what they do, and how to invoke them, so that I can understand and use project-specific automation.

**Why this priority**: Agent discoverability ensures the entire team benefits from custom agents and can extend them as needed; without clear documentation, custom agents become unmaintained technical debt.

**Independent Test**: Developer runs a help/discovery command (e.g., `/speckit.agents`) and gets a list of all custom agents with descriptions and available phases.

**Acceptance Scenarios**:

1. **Given** custom agents are registered, **When** the developer runs a discovery command, **Then** all agents are listed with descriptions
2. **Given** an agent is listed, **When** the developer reviews its details, **Then** usage examples and documentation are available
3. **Given** multiple teams using speckit, **When** agents are shared, **Then** they are discoverable across the project

---

### Edge Cases

- What happens when a custom agent fails or throws an error during execution?
- How does speckit continue if an optional custom agent fails?
- Can custom agents access and modify the feature specification or plan outputs?
- What happens when custom agents have conflicting outputs or recommendations?
- How are custom agent dependencies (e.g., external APIs, databases) managed?

## Requirements

### Functional Requirements

- **FR-001**: System MUST support registration of custom agents in `.specify/agents/` directory
- **FR-002**: System MUST load and discover all custom agents on speckit command initialization
- **FR-003**: Custom agents MUST be executable as part of `/speckit.specify` workflow
- **FR-004**: Custom agents MUST be executable as part of `/speckit.plan` workflow
- **FR-005**: Custom agents MUST be executable as part of `/speckit.tasks` workflow
- **FR-006**: Custom agents MUST be executable as part of `/speckit.implement` workflow
- **FR-007**: System MUST support both mandatory and optional custom agents
- **FR-008**: Custom agents MUST be able to access specification and plan outputs for validation/enrichment
- **FR-009**: System MUST provide a discovery mechanism (command or output) listing all available custom agents
- **FR-010**: Custom agents MUST fail gracefully without crashing speckit workflow if errors occur
- **FR-011**: System MUST support conditional execution of custom agents based on feature type or scope
- **FR-012**: Custom agents MUST be composable—multiple agents can run in sequence during a single phase

### Non-Functional Requirements

- **NFR-001**: Custom agent execution MUST not add more than 10% overhead to speckit command runtime
- **NFR-002**: Custom agents MUST have well-defined input/output contracts to avoid silent failures
- **NFR-003**: Custom agent output MUST be captured and logged for debugging and audit

### Key Entities

- **Custom Agent**: A reusable automation module registered in `.specify/agents/` that executes at specific speckit workflow phases
- **Agent Configuration**: Metadata defining agent name, description, trigger phase(s), execution rules, input/output contracts
- **Agent Registry**: Central manifest tracking all available custom agents and their metadata
- **Agent Hook**: Integration point in speckit workflow where custom agents are invoked

## Success Criteria

- Developers can define and register custom agents in less than 30 minutes with clear documentation
- Custom agents execute in all speckit command phases (specify, plan, tasks, implement) with consistent behavior
- Agent discovery is intuitive; new team members can list and understand available agents without external documentation
- Custom agent errors are caught and reported clearly without breaking speckit workflow
- Execution of all custom agents completes within 10 seconds for typical use cases
- At least 3 example agents (specification validator, architecture checker, Jira integrator) are created and documented

## Assumptions

1. Custom agents are defined as markdown files (`.md`) in `.specify/agents/` directory with front-matter metadata and execution logic
2. Agent execution framework is synchronous and runs sequentially during specified phase
3. Custom agents are trusted code (no sandboxing required initially)
4. Agents have read access to specification, plan, and task outputs; write access is controlled per-agent-type
5. Error handling strategy follows fail-safe model: optional agents fail silently, mandatory agents halt workflow unless explicitly configured otherwise
6. Agent registry is automatically generated by scanning `.specify/agents/` directory
7. Custom agents are language-agnostic (can be shell scripts, Python, Node.js, etc.) as long as they follow input/output contract

## Out of Scope

- Sandboxing or security isolation of custom agents (trusted code model)
- Agent dependency management (developers install required tools manually)
- Custom agent marketplace or sharing ecosystem
- Graphical UI for agent management (CLI-only for MVP)
- Real-time agent execution monitoring
