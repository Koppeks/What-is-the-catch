import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TriggerHitSelectSchema } from '../inputTypeSchemas/TriggerHitSelectSchema';
import { TriggerHitIncludeSchema } from '../inputTypeSchemas/TriggerHitIncludeSchema';

export const TriggerHitArgsSchema: z.ZodType<Prisma.TriggerHitDefaultArgs> = z.object({
  select: z.lazy(() => TriggerHitSelectSchema).optional(),
  include: z.lazy(() => TriggerHitIncludeSchema).optional(),
}).strict();

export default TriggerHitArgsSchema;
