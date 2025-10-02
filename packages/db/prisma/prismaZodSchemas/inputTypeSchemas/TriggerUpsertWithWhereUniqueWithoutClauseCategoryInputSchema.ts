import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerWhereUniqueInputSchema } from './TriggerWhereUniqueInputSchema';
import { TriggerUpdateWithoutClauseCategoryInputSchema } from './TriggerUpdateWithoutClauseCategoryInputSchema';
import { TriggerUncheckedUpdateWithoutClauseCategoryInputSchema } from './TriggerUncheckedUpdateWithoutClauseCategoryInputSchema';
import { TriggerCreateWithoutClauseCategoryInputSchema } from './TriggerCreateWithoutClauseCategoryInputSchema';
import { TriggerUncheckedCreateWithoutClauseCategoryInputSchema } from './TriggerUncheckedCreateWithoutClauseCategoryInputSchema';

export const TriggerUpsertWithWhereUniqueWithoutClauseCategoryInputSchema: z.ZodType<Prisma.TriggerUpsertWithWhereUniqueWithoutClauseCategoryInput> = z.strictObject({
  where: z.lazy(() => TriggerWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TriggerUpdateWithoutClauseCategoryInputSchema), z.lazy(() => TriggerUncheckedUpdateWithoutClauseCategoryInputSchema) ]),
  create: z.union([ z.lazy(() => TriggerCreateWithoutClauseCategoryInputSchema), z.lazy(() => TriggerUncheckedCreateWithoutClauseCategoryInputSchema) ]),
});

export default TriggerUpsertWithWhereUniqueWithoutClauseCategoryInputSchema;
