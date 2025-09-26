import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerCreateWithoutHitsInputSchema } from './TriggerCreateWithoutHitsInputSchema';
import { TriggerUncheckedCreateWithoutHitsInputSchema } from './TriggerUncheckedCreateWithoutHitsInputSchema';
import { TriggerCreateOrConnectWithoutHitsInputSchema } from './TriggerCreateOrConnectWithoutHitsInputSchema';
import { TriggerUpsertWithoutHitsInputSchema } from './TriggerUpsertWithoutHitsInputSchema';
import { TriggerWhereUniqueInputSchema } from './TriggerWhereUniqueInputSchema';
import { TriggerUpdateToOneWithWhereWithoutHitsInputSchema } from './TriggerUpdateToOneWithWhereWithoutHitsInputSchema';
import { TriggerUpdateWithoutHitsInputSchema } from './TriggerUpdateWithoutHitsInputSchema';
import { TriggerUncheckedUpdateWithoutHitsInputSchema } from './TriggerUncheckedUpdateWithoutHitsInputSchema';

export const TriggerUpdateOneRequiredWithoutHitsNestedInputSchema: z.ZodType<Prisma.TriggerUpdateOneRequiredWithoutHitsNestedInput> = z.object({
  create: z.union([ z.lazy(() => TriggerCreateWithoutHitsInputSchema),z.lazy(() => TriggerUncheckedCreateWithoutHitsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TriggerCreateOrConnectWithoutHitsInputSchema).optional(),
  upsert: z.lazy(() => TriggerUpsertWithoutHitsInputSchema).optional(),
  connect: z.lazy(() => TriggerWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TriggerUpdateToOneWithWhereWithoutHitsInputSchema),z.lazy(() => TriggerUpdateWithoutHitsInputSchema),z.lazy(() => TriggerUncheckedUpdateWithoutHitsInputSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.TriggerUpdateOneRequiredWithoutHitsNestedInput>;

export default TriggerUpdateOneRequiredWithoutHitsNestedInputSchema;
