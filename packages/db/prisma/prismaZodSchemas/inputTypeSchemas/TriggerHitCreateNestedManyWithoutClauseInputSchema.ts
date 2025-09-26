import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerHitCreateWithoutClauseInputSchema } from './TriggerHitCreateWithoutClauseInputSchema';
import { TriggerHitUncheckedCreateWithoutClauseInputSchema } from './TriggerHitUncheckedCreateWithoutClauseInputSchema';
import { TriggerHitCreateOrConnectWithoutClauseInputSchema } from './TriggerHitCreateOrConnectWithoutClauseInputSchema';
import { TriggerHitCreateManyClauseInputEnvelopeSchema } from './TriggerHitCreateManyClauseInputEnvelopeSchema';
import { TriggerHitWhereUniqueInputSchema } from './TriggerHitWhereUniqueInputSchema';

export const TriggerHitCreateNestedManyWithoutClauseInputSchema: z.ZodType<Prisma.TriggerHitCreateNestedManyWithoutClauseInput> = z.object({
  create: z.union([ z.lazy(() => TriggerHitCreateWithoutClauseInputSchema),z.lazy(() => TriggerHitCreateWithoutClauseInputSchema).array(),z.lazy(() => TriggerHitUncheckedCreateWithoutClauseInputSchema),z.lazy(() => TriggerHitUncheckedCreateWithoutClauseInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TriggerHitCreateOrConnectWithoutClauseInputSchema),z.lazy(() => TriggerHitCreateOrConnectWithoutClauseInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TriggerHitCreateManyClauseInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TriggerHitWhereUniqueInputSchema),z.lazy(() => TriggerHitWhereUniqueInputSchema).array() ]).optional(),
}).strict() as z.ZodType<Prisma.TriggerHitCreateNestedManyWithoutClauseInput>;

export default TriggerHitCreateNestedManyWithoutClauseInputSchema;
