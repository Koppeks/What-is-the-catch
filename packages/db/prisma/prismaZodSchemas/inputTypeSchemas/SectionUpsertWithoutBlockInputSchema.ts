import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SectionUpdateWithoutBlockInputSchema } from './SectionUpdateWithoutBlockInputSchema';
import { SectionUncheckedUpdateWithoutBlockInputSchema } from './SectionUncheckedUpdateWithoutBlockInputSchema';
import { SectionCreateWithoutBlockInputSchema } from './SectionCreateWithoutBlockInputSchema';
import { SectionUncheckedCreateWithoutBlockInputSchema } from './SectionUncheckedCreateWithoutBlockInputSchema';
import { SectionWhereInputSchema } from './SectionWhereInputSchema';

export const SectionUpsertWithoutBlockInputSchema: z.ZodType<Prisma.SectionUpsertWithoutBlockInput> = z.strictObject({
  update: z.union([ z.lazy(() => SectionUpdateWithoutBlockInputSchema), z.lazy(() => SectionUncheckedUpdateWithoutBlockInputSchema) ]),
  create: z.union([ z.lazy(() => SectionCreateWithoutBlockInputSchema), z.lazy(() => SectionUncheckedCreateWithoutBlockInputSchema) ]),
  where: z.lazy(() => SectionWhereInputSchema).optional(),
});

export default SectionUpsertWithoutBlockInputSchema;
