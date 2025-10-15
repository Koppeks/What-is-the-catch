import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SectionWhereUniqueInputSchema } from './SectionWhereUniqueInputSchema';
import { SectionUpdateWithoutParentInputSchema } from './SectionUpdateWithoutParentInputSchema';
import { SectionUncheckedUpdateWithoutParentInputSchema } from './SectionUncheckedUpdateWithoutParentInputSchema';
import { SectionCreateWithoutParentInputSchema } from './SectionCreateWithoutParentInputSchema';
import { SectionUncheckedCreateWithoutParentInputSchema } from './SectionUncheckedCreateWithoutParentInputSchema';

export const SectionUpsertWithWhereUniqueWithoutParentInputSchema: z.ZodType<Prisma.SectionUpsertWithWhereUniqueWithoutParentInput> = z.strictObject({
  where: z.lazy(() => SectionWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SectionUpdateWithoutParentInputSchema), z.lazy(() => SectionUncheckedUpdateWithoutParentInputSchema) ]),
  create: z.union([ z.lazy(() => SectionCreateWithoutParentInputSchema), z.lazy(() => SectionUncheckedCreateWithoutParentInputSchema) ]),
});

export default SectionUpsertWithWhereUniqueWithoutParentInputSchema;
