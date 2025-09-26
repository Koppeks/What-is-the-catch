import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const ClauseTypeCountOutputTypeSelectSchema: z.ZodType<Prisma.ClauseTypeCountOutputTypeSelect> = z.object({
  Trigger: z.boolean().optional(),
}).strict();

export default ClauseTypeCountOutputTypeSelectSchema;
