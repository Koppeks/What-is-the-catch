import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerCreateWithoutHitsInputSchema } from './TriggerCreateWithoutHitsInputSchema';
import { TriggerUncheckedCreateWithoutHitsInputSchema } from './TriggerUncheckedCreateWithoutHitsInputSchema';
import { TriggerCreateOrConnectWithoutHitsInputSchema } from './TriggerCreateOrConnectWithoutHitsInputSchema';
import { TriggerWhereUniqueInputSchema } from './TriggerWhereUniqueInputSchema';

export const TriggerCreateNestedOneWithoutHitsInputSchema: z.ZodType<Prisma.TriggerCreateNestedOneWithoutHitsInput> = z.object({
  create: z.union([ z.lazy(() => TriggerCreateWithoutHitsInputSchema),z.lazy(() => TriggerUncheckedCreateWithoutHitsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TriggerCreateOrConnectWithoutHitsInputSchema).optional(),
  connect: z.lazy(() => TriggerWhereUniqueInputSchema).optional()
}).strict() as z.ZodType<Prisma.TriggerCreateNestedOneWithoutHitsInput>;

export default TriggerCreateNestedOneWithoutHitsInputSchema;
