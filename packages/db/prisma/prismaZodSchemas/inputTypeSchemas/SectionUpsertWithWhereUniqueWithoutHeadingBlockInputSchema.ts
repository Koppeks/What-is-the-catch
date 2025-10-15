import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SectionWhereUniqueInputSchema } from './SectionWhereUniqueInputSchema';
import { SectionUpdateWithoutHeadingBlockInputSchema } from './SectionUpdateWithoutHeadingBlockInputSchema';
import { SectionUncheckedUpdateWithoutHeadingBlockInputSchema } from './SectionUncheckedUpdateWithoutHeadingBlockInputSchema';
import { SectionCreateWithoutHeadingBlockInputSchema } from './SectionCreateWithoutHeadingBlockInputSchema';
import { SectionUncheckedCreateWithoutHeadingBlockInputSchema } from './SectionUncheckedCreateWithoutHeadingBlockInputSchema';

export const SectionUpsertWithWhereUniqueWithoutHeadingBlockInputSchema: z.ZodType<Prisma.SectionUpsertWithWhereUniqueWithoutHeadingBlockInput> = z.strictObject({
  where: z.lazy(() => SectionWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SectionUpdateWithoutHeadingBlockInputSchema), z.lazy(() => SectionUncheckedUpdateWithoutHeadingBlockInputSchema) ]),
  create: z.union([ z.lazy(() => SectionCreateWithoutHeadingBlockInputSchema), z.lazy(() => SectionUncheckedCreateWithoutHeadingBlockInputSchema) ]),
});

export default SectionUpsertWithWhereUniqueWithoutHeadingBlockInputSchema;
