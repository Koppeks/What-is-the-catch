import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const ClauseCategoryCountOutputTypeSelectSchema: z.ZodType<Prisma.ClauseCategoryCountOutputTypeSelect> = z.object({
  Trigger: z.boolean().optional(),
  CategoryHit: z.boolean().optional(),
}).strict();

export default ClauseCategoryCountOutputTypeSelectSchema;
