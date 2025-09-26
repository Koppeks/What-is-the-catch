import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TriggerHitClauseIdTriggerIdCompoundUniqueInputSchema: z.ZodType<Prisma.TriggerHitClauseIdTriggerIdCompoundUniqueInput> = z.object({
  clauseId: z.string(),
  triggerId: z.string()
}).strict() as z.ZodType<Prisma.TriggerHitClauseIdTriggerIdCompoundUniqueInput>;

export default TriggerHitClauseIdTriggerIdCompoundUniqueInputSchema;
