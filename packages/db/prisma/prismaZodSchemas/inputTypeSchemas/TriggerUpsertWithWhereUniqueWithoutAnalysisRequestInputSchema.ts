import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerWhereUniqueInputSchema } from './TriggerWhereUniqueInputSchema';
import { TriggerUpdateWithoutAnalysisRequestInputSchema } from './TriggerUpdateWithoutAnalysisRequestInputSchema';
import { TriggerUncheckedUpdateWithoutAnalysisRequestInputSchema } from './TriggerUncheckedUpdateWithoutAnalysisRequestInputSchema';
import { TriggerCreateWithoutAnalysisRequestInputSchema } from './TriggerCreateWithoutAnalysisRequestInputSchema';
import { TriggerUncheckedCreateWithoutAnalysisRequestInputSchema } from './TriggerUncheckedCreateWithoutAnalysisRequestInputSchema';

export const TriggerUpsertWithWhereUniqueWithoutAnalysisRequestInputSchema: z.ZodType<Prisma.TriggerUpsertWithWhereUniqueWithoutAnalysisRequestInput> = z.object({
  where: z.lazy(() => TriggerWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TriggerUpdateWithoutAnalysisRequestInputSchema),z.lazy(() => TriggerUncheckedUpdateWithoutAnalysisRequestInputSchema) ]),
  create: z.union([ z.lazy(() => TriggerCreateWithoutAnalysisRequestInputSchema),z.lazy(() => TriggerUncheckedCreateWithoutAnalysisRequestInputSchema) ]),
}).strict() as z.ZodType<Prisma.TriggerUpsertWithWhereUniqueWithoutAnalysisRequestInput>;

export default TriggerUpsertWithWhereUniqueWithoutAnalysisRequestInputSchema;
