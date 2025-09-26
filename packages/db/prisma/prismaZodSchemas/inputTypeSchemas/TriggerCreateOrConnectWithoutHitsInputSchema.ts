import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerWhereUniqueInputSchema } from './TriggerWhereUniqueInputSchema';
import { TriggerCreateWithoutHitsInputSchema } from './TriggerCreateWithoutHitsInputSchema';
import { TriggerUncheckedCreateWithoutHitsInputSchema } from './TriggerUncheckedCreateWithoutHitsInputSchema';

export const TriggerCreateOrConnectWithoutHitsInputSchema: z.ZodType<Prisma.TriggerCreateOrConnectWithoutHitsInput> = z.object({
  where: z.lazy(() => TriggerWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TriggerCreateWithoutHitsInputSchema),z.lazy(() => TriggerUncheckedCreateWithoutHitsInputSchema) ]),
}).strict() as z.ZodType<Prisma.TriggerCreateOrConnectWithoutHitsInput>;

export default TriggerCreateOrConnectWithoutHitsInputSchema;
