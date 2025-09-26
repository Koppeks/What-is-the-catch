import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ClauseCreatetriggerWarningInputSchema: z.ZodType<Prisma.ClauseCreatetriggerWarningInput> = z.object({
  set: z.string().array()
}).strict() as z.ZodType<Prisma.ClauseCreatetriggerWarningInput>;

export default ClauseCreatetriggerWarningInputSchema;
