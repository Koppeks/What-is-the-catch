import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ClauseUpdatetriggerWarningInputSchema: z.ZodType<Prisma.ClauseUpdatetriggerWarningInput> = z.object({
  set: z.string().array().optional(),
  push: z.union([ z.string(),z.string().array() ]).optional(),
}).strict() as z.ZodType<Prisma.ClauseUpdatetriggerWarningInput>;

export default ClauseUpdatetriggerWarningInputSchema;
