import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerHitWhereUniqueInputSchema } from './TriggerHitWhereUniqueInputSchema';
import { TriggerHitCreateWithoutClauseInputSchema } from './TriggerHitCreateWithoutClauseInputSchema';
import { TriggerHitUncheckedCreateWithoutClauseInputSchema } from './TriggerHitUncheckedCreateWithoutClauseInputSchema';

export const TriggerHitCreateOrConnectWithoutClauseInputSchema: z.ZodType<Prisma.TriggerHitCreateOrConnectWithoutClauseInput> = z.object({
  where: z.lazy(() => TriggerHitWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TriggerHitCreateWithoutClauseInputSchema),z.lazy(() => TriggerHitUncheckedCreateWithoutClauseInputSchema) ]),
}).strict() as z.ZodType<Prisma.TriggerHitCreateOrConnectWithoutClauseInput>;

export default TriggerHitCreateOrConnectWithoutClauseInputSchema;
